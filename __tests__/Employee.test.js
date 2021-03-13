const Employee = require("../lib/Employee");

test("Can create new Employee class object", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

test("Can set name via constructor", () => {
    const name = "Mike";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set ID via constructor", () => {
    const testValue = 100;
    const e = new Employee("Mike", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email via constructor", () => {
    const testValue = "test@test.com";
    const e = new Employee("Mike", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = "Mike";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Employee("Mike", testValue);
    expect(e.getID()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Mike", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Mike", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});