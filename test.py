import sys

def sum(a,b):
    c = a + b
    print(c)
    return c

data = sys.argv[1:]
print(data)

sum(int(data[0]),int(data[1]))


