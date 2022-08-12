import express from "express";
import {
  fetchData,
} from "../Controller/FetchController.js";

const router = express.Router();

router.get("/fetchData", fetchData);

export default router;