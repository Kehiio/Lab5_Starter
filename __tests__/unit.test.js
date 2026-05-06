// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Tests for isPhoneNumber
test('if 7148858098 is valid phone number', () => {
    expect(isPhoneNumber("(714)-885-8098")).toBe(true);
});

test('if 714 885 8098 is valid phone number', () => {
    expect(isPhoneNumber("(858)-111-1234")).toBe(true);
});

test('if 000223 is valid phone number', () => {
    expect(isPhoneNumber(700223)).toBe(false);
});

test('if j is valid phone number', () => {
    expect(isPhoneNumber('j')).toBe(false);
});

// Tests for isEmail
test('if kdempster@ucsd.edu is valid email', () => {
    expect(isEmail("kdempster@ucsd.edu")).toBe(true);
});

test('if hello@gmail.com is valid email', () => {
    expect(isEmail("hello@gmail.com")).toBe(true);
});

test('if hello.com is valid email', () => {
    expect(isEmail("hello.com")).toBe(false);
});

test('if 47h3 is valid email', () => {
    expect(isEmail("47h3")).toBe(false);
});

// Tests for isStrongPassword

test('if Apples_Bananas is strong password', () => {
    expect(isStrongPassword("Apples_Bananas")).toBe(true);
});

test('if WindowsXP123 is strong password', () => {
    expect(isStrongPassword("WindowsXP123")).toBe(true);
});

test('if 12345678 is strong password', () => {
    expect(isStrongPassword("12345678")).toBe(false);
});

test('if hello!!chat is strong password', () => {
    expect(isStrongPassword("hello!!chat")).toBe(false);
});

// Tests for isDate

test('if 08/21/2005 is a valid date', () => {
    expect(isDate("8/21/2005")).toBe(true);
});

test('if 09/20/1999 is a valid date', () => {
    expect(isDate("09/20/1999")).toBe(true);
});

test('if 21/2005 is a valid date', () => {
    expect(isDate("21/2005")).toBe(false);
});

test('if 809/21/2005 is a valid date', () => {
    expect(isDate("809/21/2005")).toBe(false);
});

// tests for isHexColor

test('if ffffff is a hexcolor', () => {
    expect(isHexColor("ffffff")).toBe(true);
});

test('if 387 is a valid hexcolor', () => {
    expect(isHexColor(387)).toBe(true);
});

test('if 12334567 is a hexcolor', () => {
    expect(isHexColor("12334567")).toBe(false);
});

test('if GGGGGG is a hexcolor', () => {
    expect(isHexColor("GGGGGG")).toBe(false);
});



