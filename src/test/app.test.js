describe("[APP] Esta es la prueba general", () => {

    test("Esto deberia retornar ", () => {
        const a = 1;
        const b = 2;
        const total = a + b;

        expect(total).toEqual(3)
    })
})