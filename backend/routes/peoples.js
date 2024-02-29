const router = require('express').Router();
let People = require('../models/Peoples');

router.route('/').get((req, res) => {
    People.find()
        .then(people => res.json(people))
        .catch(err => res.status(400).json('Error:' + err));
});
router.route("/add").post((req, res) => {
    const fname = req.body.fname;
    const nwi = req.body.nwi;
    const eid = req.body.eid;
    const gender = req.body.gender;
    const email = req.body.email;
    const designation = req.body.designation;
    const jdate = Date.parse(req.body.jdate);
    const salary = req.body.salary;
    const pnotes = req.body.pnotes;
    const dname = req.body.dname;
    const dob = Date.parse(req.body.dob);
    const mnumber = Number(req.body.mnumber);
    const etype = Number(req.body.etype);
    const experience = Number(req.body.experience);

    const newPeople = new People({
        fname,
        nwi,
        eid,
        gender,
        email,
        designation,
        jdate,
        salary,
        pnotes,
        dname,
        dob,
        mnumber,
        etype,
        experience
    });

    newPeople.save()
        .then(() => res.json('Adding Success!'))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
    People.findById(req.params.id)
        .then(people => res.json(people))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
    People.findByIdAndDelete(req.params.id)
        .then(() => res.json('People  deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/edit/:id').post((req, res) => {
    People.findById(req.params.id)
        .then(people => {
            people.fname = req.body.fname;
            people.nwi = req.body.nwi;
            people.eid = req.body.eid;
            people.gender = req.body.gender;
            people.email = req.body.email;
            people.designation = req.body.designation;
            people.jdate = Date.parse(req.body.jdate);
            people.salary = req.body.salary;
            people.pnotes = req.body.pnotes;
            people.dname = req.body.dname;
            people.dob = Date.parse(req.body.dob);
            people.mnumber = Number(req.body.mnumber);
            people.etype = Number(req.body.etype);
            people.experience = Number(req.body.experience);

            people.save()
                .then(() => res.json('People updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;