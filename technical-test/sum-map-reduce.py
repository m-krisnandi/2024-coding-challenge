from functools import reduce

def sum(array):
    numbers = map(lambda x: x ** 2, array)
    sum_reduce = reduce(lambda a, b: a + b, numbers)
    return sum_reduce

array = [1, 2, 3, 4, 5]
print(sum(array))