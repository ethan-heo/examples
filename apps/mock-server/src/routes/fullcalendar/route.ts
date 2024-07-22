import express from "express";
import Mock from "../../modules/Mock";

const router = express.Router();

router.get("/reservation", (req, res) => {
  res.status(200).send(
    Mock.array(
      Mock.object({
        title: Mock.lorem().set({ type: "Word" }),
        date: "2024-07-19",
      }),
    )
      .set({ length: 3000 })
      .valueOf(),
  );
});

export default router;
