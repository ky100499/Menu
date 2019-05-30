"use strict"

const router = require('express').Router()

router
.get('/', (req, res) => {
    res.redirect('/main')
})
.get('/main', (req, res) => {
    res.render('main/main')
})
.get('/side', (req, res) => {
    res.render('main/side')
})
.get('/fruit', (req, res) => {
    res.render('main/fruit')
})
.get('/menu', (req, res) => {
    res.render('main/menu')
})

module.exports = router
