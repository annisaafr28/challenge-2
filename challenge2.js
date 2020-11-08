const express = require("express") //memanggil library express js
const bodyParser= require("body-parser") //memanggil library body-parser
const cors = require("cors") //memanggil library cors
const app = express()

//penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

//penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

//penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

//menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})

//end-point "/kubus" dengan method POST
app.post("/kubus", (req,res) => {
    //menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let sisi = Number(req.body.sisi) //mengambil nilai sisi dari body
    
    let volume = sisi * sisi * sisi
    let luas_permukaan = 6 * sisi * sisi

    //membuat objek yang berisi data yg akan dijadikan response
    let response = {
        sisi: sisi,
        volume: volume,
        luas_permukaan: luas_permukaan
    }

    //memberikan response dengan format JSON yang berisi objek diatas
    res.json(response)
})

//end-point "/balok" dengan method POST
app.post("/balok", (req,res) => {
    //menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let p = Number(req.body.p) //mengambil nilai panjang dari body
    let l = Number(req.body.l) //mengambil nilai lebar dari body
    let t = Number(req.body.t) //mengambil nilai tinggi dari body
    
    let volume = p * l * t
    let luas_permukaan = 2 * (p * l + p * t + l * t)

    //membuat objek yang berisi data yg akan dijadikan response
    let response = {
        panjang: p,
        lebar: l,
        tinggi: t,
        volume: volume,
        luas_permukaan: luas_permukaan
    }

    //memberikan response dengan format JSON yang berisi objek diatas
    res.json(response)
})

//end-point "/bola" dengan method POST
app.post("/bola", (req,res) => {
    //menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let r = Number(req.body.r) //mengambil nilai jari-jari dari body
    
    let volume = 4/3 * 22/7 * r * r * r
    let luas_permukaan = 4 * 22/7 * r * r

    //membuat objek yang berisi data yg akan dijadikan response
    let response = {
        jari_jari: r,
        volume: volume,
        luas_permukaan: luas_permukaan
    }

    //memberikan response dengan format JSON yang berisi objek diatas
    res.json(response)
})

//end-point "/kerucut" dengan method POST
app.post("/kerucut", (req,res) => {
    //menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let r = Number(req.body.r) //mengambil nilai jari-jari dari body
    let t = Number(req.body.t) //mengambil nilai tinggi dari body
    let s = Number(req.body.s) //mengambil nilai selimut dari body
    
    let volume = 1/3 * 22/7 * r * r * t
    let luas_permukaan = (22/7 * r * r) + (22/7 * r * s)

    //membuat objek yang berisi data yg akan dijadikan response
    let response = {
        jari_jari: r,
        tinggi: t,
        selimut: s,
        volume: volume,
        luas_permukaan: luas_permukaan
    }

    //memberikan response dengan format JSON yang berisi objek diatas
    res.json(response)
})

//endpoint "/convert/celcius/:value" dengan method GET
app.get("/convert/celcius/:value", (req,res) => {
    //bersifat dinamis yang dapat diganti nilainya saat melakukan req

    //menampung data yg dikirimkan
    let value = Number(req.params.value) //mengambil nilai pd parameter celcius 
    let reamur = 4/5 * value
    let fahrenheit = (9/5 * value) + 32
    let kelvin = value + 273
    
    //membuat objek yg berisi data yg akan dijadikan response
    let response = {
        celcius: value,
        result: {
            reamur: reamur,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }

    //memberikan response dengan format JSON yang berisi objek diatas 
    res.json(response)
})

//endpoint "/convert/reamur/:value" dengan method GET
app.get("/convert/reamur/:value", (req,res) => {
    //bersifat dinamis yang dapat diganti nilainya saat melakukan req

    //menampung data yg dikirimkan
    let value = Number(req.params.value) //mengambil nilai pd parameter celcius 
    let celcius = 5/4 * value
    let fahrenheit = (9/4 * value) + 32
    let kelvin = (5/4 * value) + 273
    
    //membuat objek yg berisi data yg akan dijadikan response
    let response = {
        reamur: value,
        result: {
            celcius: celcius,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }

    //memberikan response dengan format JSON yang berisi objek diatas 
    res.json(response)
})

//endpoint "/convert/fahrenheit/:value" dengan method GET
app.get("/convert/fahrenheit/:value", (req,res) => {

    //bersifat dinamis yang dapat diganti nilainya saat melakukan req

    //menampung data yg dikirimkan
    let value = Number(req.params.value) //mengambil nilai pd parameter fahrenheit 
    let celcius = 5/9 * (value - 32)
    let reamur = 4/9 * (value - 32)
    let kelvin = 5/9 * (value - 32) + 273
    
    //membuat objek yg berisi data yg akan dijadikan response
    let response = {
        fahrenheit: value,
        result: {
            celcius: celcius,
            reamur: reamur,
            kelvin: kelvin
        }
    }

    //memberikan response dengan format JSON yang berisi objek diatas 
    res.json(response)
})

//endpoint "/convert/kelvin/:value" dengan method GET
app.get("/convert/kelvin/:value", (req,res) => {
    //bersifat dinamis yang dapat diganti nilainya saat melakukan req

    //menampung data yg dikirimkan
    let value = Number(req.params.value) //mengambil nilai pd parameter kelvin 
    let celcius = value - 273
    let fahrenheit = 9/5 * (value - 273) + 32
    let reamur = 4/5 * (value - 273)
    
    //membuat objek yg berisi data yg akan dijadikan response
    let response = {
        kelvin: value,
        result: {
            celcius: celcius,
            fahrenheit: fahrenheit,
            reamur: reamur
        }
    }

    //memberikan response dengan format JSON yang berisi objek diatas 
    res.json(response)
})

//end-point "/desimal" dengan method POST
app.post("/desimal", (req,res) => {
    //menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let desimal = Number(req.body.desimal) //mengambil nilai desimal dari body
    
    //konversi ke biner
    let biner = parseInt(desimal,10).toString(2)

    //konversi ke octal
    let octal = parseInt(desimal,10).toString(8)

    //konversi ke hexadesimal
    let hexa = parseInt(desimal,10).toString(16)

    //membuat objek yang berisi data yg akan dijadikan response
    let response = {
        desimal: desimal,
        result : {
            biner: biner,
            octal: octal,
            hexa: hexa
        }
    }

    //memberikan response dengan format JSON yang berisi objek diatas
    res.json(response)
})

//end-point "/biner" dengan method POST
app.post("/biner", (req,res) => {
    //menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let biner = Number(req.body.biner) //mengambil nilai biner dari body
    
    //konversi ke desimal
    let desimal = parseInt(biner,2).toString(10)

    //konversi ke octal
    let octal = parseInt(biner,2).toString(8)

    //konversi ke hexadesimal
    let hexa = parseInt(biner,2).toString(16)

    //membuat objek yang berisi data yg akan dijadikan response
    let response = {
        biner: biner,
        result : {
            desimal: desimal,
            octal: octal,
            hexa: hexa
        }
    }

    //memberikan response dengan format JSON yang berisi objek diatas
    res.json(response)
})

//end-point "/octal" dengan method POST
app.post("/octal", (req,res) => {
    //menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let octal = Number(req.body.octal) //mengambil nilai octal dari body
    
    //konversi ke desimal
    let desimal = parseInt(octal,8).toString(10)

    //konversi ke biner
    let biner = parseInt(octal,8).toString(2)

    //konversi ke hexadesimal
    let hexa = parseInt(octal,8).toString(16)

    //membuat objek yang berisi data yg akan dijadikan response
    let response = {
        octal: octal,
        result : {
            desimal: desimal,
            biner: biner,
            hexa: hexa
        }
    }

    //memberikan response dengan format JSON yang berisi objek diatas
    res.json(response)
})

//end-point "/hexa" dengan method POST
app.post("/hexa", (req,res) => {
    //menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let hexa = Number(req.body.hexa) //mengambil nilai hexa dari body
    
    //konversi ke biner
    let biner = parseInt(hexa,16).toString(2)

    //konversi ke octal
    let octal = parseInt(hexa,16).toString(8)

    //konversi ke desimal
    let desimal = parseInt(hexa,16).toString(10)

    //membuat objek yang berisi data yg akan dijadikan response
    let response = {
        hexa: hexa,
        result : {
            biner: biner,
            octal: octal,
            desimal: desimal
        }
    }

    //memberikan response dengan format JSON yang berisi objek diatas
    res.json(response)
})

//end-point "/bmi" dengan method POST
app.post("/bmi", (req,res) => {
    //menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let berat = Number(req.body.berat) //mengambil nilai berat dari body
    let tinggi = Number(req.body.tinggi) //mengambil nilai tinggi dari body

    let BMI = berat / ( tinggi * tinggi )
    let keterangan = ""
    
    if (BMI <= 18.5){
        keterangan = "Kekurangan berat badan"
    } else if (BMI <= 24.9){
        keterangan = "Normal"
    } else if (BMI <= 29.9){
        keterangan = "Kelebihan berat badan"
    } else if (BMI >= 30){
        keterangan = "Obesitas"
    }

    //membuat objek yang berisi data yg akan dijadikan response
    let response = {
        berat: berat,
        tinggi: tinggi,
        BMI: BMI,
        keterangan: keterangan
    }

    //memberikan response dengan format JSON yang berisi objek diatas
    res.json(response)
})

