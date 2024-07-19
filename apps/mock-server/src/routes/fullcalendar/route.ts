import express from "express";
import Mock from "../../modules/Mock";

const router = express.Router();

router.get("/reservation", (req, res) => {
  res.status(200).json(
    Mock.array(
      Mock.object({
        id: Mock.number().set({ max: 999 }),
        name: Mock.lorem().set({ type: "Word" }),
        tags: Mock.array(Mock.lorem().set({ type: "Word" })),
        nums: [Mock.number().set({ max: 10 }), Mock.number().set({ max: 20 })],
      }),
    )
      .set({ length: 3000 })
      .valueOf(),
  );
});

export default router;
