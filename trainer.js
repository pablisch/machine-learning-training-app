import { sampleData } from "./data.js"

const data = sampleData
const convergenceThreshold = 0.1

const trainModel = (numOfIterations) => {
    // iterate over the number of iterations
    for (let i = 0; i < numOfIterations; i++) {
        data.previousLoss = data.currentLoss
        // iterate over the number of examples
        console.log("iteration:", i)
        for (let j = 0; j < data.examples.length; j++) {
            const example = data.examples[j]
            const prediction = (data.weight * example.feature) + data.bias
            example.loss = prediction - example.label
        }
        // console.log("updated data:", data)
        
        // Calculate the sum of squared losses
        const loss2 = data.examples.reduce((acc, example) => {
            acc += Math.pow(example.loss, 2)
            return acc
        }, 0)
        data.currentLoss = loss2
        if (Math.abs(data.currentLoss - data.previousLoss) < convergenceThreshold) {
            console.log("current loss:", data.currentLoss, "previous loss:", data.previousLoss, "difference:", Math.abs(data.currentLoss - data.previousLoss), "loss converged")
            break
        }
        console.log("loss2:", loss2.toFixed(2))
        const mse = loss2 / data.examples.length
        console.log("mse:", mse.toFixed(2))

        // Calculate the new weight value
        const weightDerivatives = data.examples.reduce((acc, example) => {
            acc += example.loss * example.feature * 2
            return acc
        }, 0)
        const meanWeightDerivative = weightDerivatives / data.examples.length
        console.log("meanWeightDerivative:", meanWeightDerivative.toFixed(2))
        const newWeight = data.weight - (meanWeightDerivative * 0.01)
        console.log("newWeight:", newWeight.toFixed(2))
        data.weight = newWeight

        // Calculate the new bias value
        const biasDerivatives = data.examples.reduce((acc, example) => {
            acc += example.loss * 2
            return acc
        }, 0)
        const meanBiasDerivative = biasDerivatives / data.examples.length
        console.log("meanBiasDerivative:", meanBiasDerivative.toFixed(2))
        const newBias = data.bias - (meanBiasDerivative * 0.01)
        console.log("newBias:", newBias.toFixed(2))
        data.bias = newBias
        console.log("difference in loss:", Math.abs(data.currentLoss - data.previousLoss))
        // console.log("updated data:", data)
        console.log("---------------------------------------")

    }
}

trainModel(1000)

// import { sampleData } from "./data.js"
//
// const data = sampleData
//
// const trainModel = (numOfIterations) => {
//     let weight = data.weight
//     let bias = data.bias
//     for (let i = 0; i < numOfIterations; i++) {
//         const losses = []
//         for (let j = 0; j < data.examples.length; j++) {
//             const feature = data.examples[j].feature
//             const label = data.examples[j].label
//             const prediction = (weight * feature) + bias
//             losses.push({ loss: prediction - label, feature: feature, label: label })
//         }
//         console.log("losses:", losses)
//         const loss2 = losses.reduce((acc, curr) => {
//             acc += Math.pow(curr.loss, 2)
//             return acc
//         }, 0);
//         console.log("loss2:", loss2)
//         const mse = loss2 / data.examples.length
//         console.log("mse:", mse.toFixed(2))
//     }
// }
//
// trainModel(1)