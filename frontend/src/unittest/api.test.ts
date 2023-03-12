import * as api from "../api/api"



describe("Test API", () => {
    test("api.EMPLOYE_GET_SINGLE_API", () => {
        let result: any = api.EMPLOYE_GET_SINGLE_API(undefined)
        expect(result).toBe("/api/employees/")
    })

    test("api.EMPLOYE_UPDATE_API", () => {
        let result: any = api.EMPLOYE_UPDATE_API(undefined)
        expect(result).toBe("/api/employees/")
    })

    test("api.EMPLOYE_DELETE_API", () => {
        let result: any = api.EMPLOYE_DELETE_API(undefined)
        expect(result).toBe("/api/employees/")
    })
})
