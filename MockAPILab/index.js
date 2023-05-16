const express = require('express');
const app = express();
const port = 3000;
const isLocal = true;
const mongoose = require('mongoose');
const schema = mongoose.Schema;

app.use(express.json());

const loanSchema = new schema({
	loanId: Number,
	borrowers: [{
		pairId: Number,
		firstName: String,
		lastName: String,
        phone: String,
	}],
	collection: "loanData",
});

const loanData = mongoose.model('loanData', loanSchema);

//check db connection
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

app.get('/loan', (req, res) => {
	loanData.find({}, (err, data) => {
		res.json(data);
		console.log(data);
	})
});

app.get('/loan/:loanId', (req, res) => {
	loanData.find({loanId: req.params.loanId}, (err, data) => {
		res.json(data);
		console.log(data);
	})
});

app.post('loan/:loanId', (req, res) => {
	const newLoan = new loanData({
		loanId: req.params.loanId,
        borrowers: [req.body],
	});

	newLoan.save().then(res.json(newLoan));
});

app.patch('/loan/:loanId', (req, res) => {
	loanData.findOneAndUpdate({loanId: req.params.loanId, pairId: req.params.pairId, borrowers: req.body})
	.then(res.json(`Loan ${loanId} was updated`));
});

app.patch('/loan/removeBorrower/:loanId', (req, res) => {
	loanData.findOneAndUpdate({loanId: req.params.loanId, pairId: req.params.pairId})
	.then(res.json(`Loan ${loanId} was updated`));
});

app.delete('/loan/deleteLoan/:loanId', (req, res) => {
	loanData.find( {loanId: req.params.loanId}).then( () => {
		loanData.deleteOne({loanId: req.params.loanId})
		.then(res.json(`Loan ${loanId} was deleted`));
	});
});


if (isLocal) {
	//local host
	app.listen(port, () => {
		console.log(`Example app listening on port ${port}`)
	});
} else {
	//for lambda export
	module.exports = app;
}
