import { checkTokenFunction } from "../functions/check-token";
import { createTokenFunction } from "../functions/create-token";
import { deleteUserFunction } from "../functions/delete-user";
import { getUserFunction } from "../functions/get-user";
import { loginFunction } from "../functions/register";

describe("testing libs", () => {
    describe("register", () => {
        it("return true", async () => {
            expect((await loginFunction("test123", "test123", "test123", "test123"))).toBe(true);
        });
    });

    it("getUser", async () => {
        await getUserFunction("test123", "test123", "test123");
    });

    it("createToken", async () => {
        await createTokenFunction("teste123");
    });

    it("checkToken", async () => {
        await checkTokenFunction("token123");
    });

    it("deleteUser", async () => {
        await deleteUserFunction("test123", "test123", "test123");
    });
});