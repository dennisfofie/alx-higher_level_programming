import dis
#!/usr/bin/python3
def magic_calculation(a, b, c):
    if a < b:
        return c
    if c > b:
        return a + b
    return a * b - c
    
a = dis.dis(magic_calculation)
print(a)
