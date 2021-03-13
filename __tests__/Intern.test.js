const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");

test("Can set school via constructor", () => {
    const testValue = "University of Pennsylvania";
    const e = new Intern("Mike", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Mike", 1, "test@test.com", "University of Pennsylvania");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "University of Pennsylvania";
    const e = new Intern("Mike", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});