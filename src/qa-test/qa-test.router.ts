import { Router } from "express";
import tryCatchWrapper from "../helpers/function-helpers/try-catch-wrapper";
import { authorize } from "./../auth/auth.controller";
import { loadTechTest, loadTheoryTest } from "./qa-test.controller";

const router = Router();

router.get("/tech", tryCatchWrapper(authorize), tryCatchWrapper(loadTechTest));
router.get(
  "/theory",
  tryCatchWrapper(authorize),
  tryCatchWrapper(loadTheoryTest)
);

export default router;
