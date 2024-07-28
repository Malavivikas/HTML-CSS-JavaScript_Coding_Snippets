
const fs = require ('fs');

const directory = 'ite-m7/'

fs.readdir(directory, (error, files) => {
  if (error) {
    throw error
  }

  for (let file of files) {
    let imgFile = directory + file
    let renameFile = directory + file.toLowerCase().replaceAll(' ', '-').replaceAll('---','-');

    fs.rename(imgFile, renameFile, function (error) {
      if (error) {
        console.log('ERROR: ' + error)
      }

      console.log(renameFile + ' : File name successfully changed.')
    })
  }
})