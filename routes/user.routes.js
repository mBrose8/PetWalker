import express from "express";
import User from "../models/User.js";
import verifyToken from "../config/auth.js";
import Dogs from "../models/Dogs.js";
import PetWalker from "../models/PetWalker.js";



const user = express.Router();

user.get('/', (req, res) => {
    const token = req.headers['token'];
    const authData = verifyToken(token, res);
});

user.delete('/delete'), async (req, res) => {
    console.log("Estou aqui")
    const { id } = req.body
    const oldDogs = new Dogs({ id });
    const deleteDogs = await oldDogs.destroy().catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ error: "Não foi possível excluir o PET"});
    });
}

user.post('/register', async (req, res) => {
    const { name, email, password, cpf, endereco } = req.body;

    const alreadyExistsUser = await User.findOne(
        { where: { email } }
    ).catch((err) => console.log("Error: ", err));

    if (alreadyExistsUser) {
        console.log("Usuário existente: " + alreadyExistsUser);
        return res
            .status(409)
            .json({ message: "E-mail já utilizado por outro usuário"})
    }

    const newUser = new User({ name, email, password, cpf, endereco });

    const savedUser = await newUser.save().catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ error: "Não foi possível cadastrar o usuário"});
    });

    if (savedUser) {
        console.log(savedUser);
        res.json({ message: "Obrigado pelo cadastro!" })
    } 


});


user.post('/dogs', async (req, res) => {

    const { Raca, Nome, Idade, Sexo, Porte } = req.body;

    const newDogs = new Dogs({ Raca, Nome, Idade, Sexo, Porte });

    const savedDogs = await newDogs.save().catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ error: "Não foi possível cadastrar o PET"});
    });

    if (savedDogs) {
        console.log(savedDogs);
        res.json({ message: "Obrigado pelo cadastro de seu PET !" })
    } 


});

user.get('/findpet', async (req, res) => {
    const pets = await Dogs.findAll().catch((err) => console.log("Error: ", err));

    if (pets) {
        return res
            .status(200)
            .json({pets})
    }
})

user.post('/petwalker', async (req, res) => {

    const { Email, Nome, Telefone } = req.body;

    const newPetWalker = new PetWalker({ Email, Nome, Telefone });

    const alreadyExistsPetWalker = await User.findOne(
        { where: { Email } }
    ).catch((err) => console.log("Error: ", err));

    if (alreadyExistsPetWalker) {
        console.log("E-mail já cadastrado: " + alreadyExistsPetWalker);
        return res
            .status(409)
            .json({ message: "E-mail já utilizado por outro usuário"})
    }

    const savedPetWalker = await newPetWalker.save().catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ error: "Não foi possível cadastrar o usuário"});
    });

    if (savedPetWalker) {
        console.log(savedPetWalker);
        res.json({ message: "Obrigado pelo cadastro !" })

    } 


});


export default user;