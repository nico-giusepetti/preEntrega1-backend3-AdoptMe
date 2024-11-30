import { faker } from "@faker-js/faker";
import { createHash } from "../utils/index.js";

class MockingService{
    static async generateMockingPets(num) {
        const pets = [];

        // Especies de Mascotas validas
        const validSpecies = ["dog", "cat", "rabbit", "bird", "hamster", "fish", "turtle"];

        while (pets.length < num) {     // Generar mascotas hasta cumplir la cantidad
            
            for (let i = 0; i < num; i++) {
                const specie = faker.animal.type();
    
                // Validamos la especie
                if (validSpecies.includes(specie)) {
                    pets.push({
                        name: faker.animal.petName(),
                        specie: specie,
                        asopted: false,
                        birthDate: faker.date.past(),
                        image: "https://via.placeholder.com/150"
                    });
                }
            }
        }
        return pets;
    }

    static async generateMockingUsers(num) {
        const users = [];
        for(let i = 0; i < num; i++) {
            users.push({
                first_name: faker.person.firstName(),
                last_name: faker.person.lastName(),
                email: faker.internet.email(),
                password: await createHash("coder123"),
                role: faker.helpers.arrayElement(["user", "admin"]),
                pets: []
            })
        }
        return users;
    }
}

export default MockingService;