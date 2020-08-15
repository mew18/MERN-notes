var express = require('express')
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var ingredients = [
    {
        "id": "232kak",
        "text": "Eggs"
    },
    {
        "id": "1234df",
        "text": "Milk"
    },
    {
        "id": "3445hs",
        "text": "Bread"
    },
    {
        "id": "97dsskh",
        "text": "butter"
    }
];

app.get('/ingredients', function (req, res) {
    res.send(ingredients);
});

app.post('/ingredients', (req, res) => {
    var ingredient = req.body;

    if (!ingredient || ingredient.text === "") {
        res.status(500).send({ error: "Your ingredient must have text" });
    }

    else {
        ingredients.push(ingredient)
        res.status(200).send(ingredients);
    }
});

app.put('/ingredients/:ingredientId', (req, res) => {
    // var ingredientId = req.params.ingredientId;
    var newText = req.body.text;

    if (!newText || newText === "") {
        res.status(500).send({ error: "You must provide ingredient text" });
    }

    else {
        var found = false
        for (var i = 0; i < ingredients.length; ++i) {
            var ing = ingredients[i];

            if (ing.id === req.params.ingredientId) {
                ingredients[i].text = newText;
                found = true
                break;
            }
        }

        if (!found) {
            res.status(500).send({ error: "Ingredient Id not found" });
        }

        else {
            res.send(ingredients);
        }


    }
});

app.delete('path', (req, res) => {
    
});

app.listen(69, function () {
    console.log("First API running on port 69");
});


