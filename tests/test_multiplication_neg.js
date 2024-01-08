const webdriverio = require('webdriverio');
const androidOptions = require('../helpers/capabilities').androidOptions;

const exec = require("child_process").exec;
const assert = require('chai').expect;

describe('Create Android session', async function () {
  let client;

  before(async function () {
    console.log('########## start');
    const arguments = process.argv.slice(2);
    console.log('Run arguments are');
    arguments.forEach((val, index) => {
      console.log(`${index}: ${val}`);
    });

    await exec("emulator.exe -avd " + arguments[3], (err, output) => {
      // once the command has completed, the callback function is called
      if (err) {
        // log and return if we encounter an error
        console.error("could not execute command: ", err)
        return
      }
      // log the output received from the command
      console.log("Output: \n", output)
    });
    client = await webdriverio.remote(androidOptions);
  });

  it('multiplication negative test', async function () {
    const res = await client.status();

    const digit7 = await client.$('~7');
    const point = await client.$('~point');
    const multiply = await client.$('~multiply');
    await digit7.click();
    await multiply.click();
    await point.click();
    const equal = client.$('~equals');
    await equal.click();

    const result = await client.$('android.widget.TextView').getText();

    await assert(result).equal('Format error');

    const delete_session = await client.deleteSession();

    await exec("adb -e emu ****");

  });
});