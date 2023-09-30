import { Router } from "express";
import { HomeController } from "../controller/HomeController.js";

export const Home = Router ();

Home.get('/', HomeController.index);
Home.post("/shortener", HomeController.shortener);
Home.get('/:url', HomeController.index_id);