

import {
  MockContext,
  Context,
  createMockContext,
} from "../config/context.config";
import request from "supertest";
import makeApp from "../app";
import { Application } from "express";

/*
let mockCtx: MockContext;
let ctx: Context;
let app: Application


beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
  app = makeApp(ctx);
});
*/
describe("", () => {

  let mockCtx = createMockContext();
  let ctx = mockCtx as unknown as Context;
  let app = makeApp(ctx);
  test("", async () => {
    const response = await request(app).post("/api/auth/register").send({
      username: "HelloWorld"
    })
    expect(response.statusCode).toBe(200);
  });
});
