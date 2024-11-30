import { Router } from "express";
import mocksController from "../controllers/mocks.controller.js";


const router = Router();

// Obtener Mascotas Simuladas
router.get("/mockingpets", mocksController.getMockingPets);

// Obtener Usuarios Simulados
router.get("/mockingusers", mocksController.getMockingUsers);

// Generar y Guardar Datos Simulados
router.post("/generateData", mocksController.generateData);

export default router;