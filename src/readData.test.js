import citiesData from "./readData";

test("Data gets converted to dictionary", () => {
    const citiesDataLen = citiesData.length;
    expect(citiesDataLen).toBe(184);

    expect(citiesData).toContainEqual({
        ranking: "11th",
        name: "Singapore",
        country: "🇸🇬",
        priceIndex: 194,
    });
});
