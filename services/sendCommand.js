import child_process from 'child_process'

const exec = child_process.exec

const commands = {
    onLed : 'python ./scripts/ON_LED.py'
    , offLed : 'python ./scripts/OFF_LED.py'
}
/**
 * @param {string} command 
 */
const sendCommand = function (command) {

    let values = Object.values(commands)

    if(values.indexOf(command) < 0) {
        throw `${command} not suport`
    }

    return new Promise((resolve, reject) => {
        const child = exec(command, (error, stdout, stderr) => {

            if (error) {

                reject(error)
            } else {
                console.log('stdout', stdout)
                resolve(stdout)
            }
        })
    }) 
}

export { sendCommand , commands }