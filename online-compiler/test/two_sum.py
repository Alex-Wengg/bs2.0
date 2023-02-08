

import sys
# from sys.argv[1] import add
import importlib.util

sys.path.insert(1, '.')

# print(sys.path)
var = sys.argv[1].split('/')
path = '/'.join(var[:-1]) + '/'
sys.path.insert(0,path)
# print(path)
file = var[-1][:-3] 
# print(file)
# print(sys.argv[1])
my_module = importlib.import_module(file)

 
if (my_module.twoSum([2,7,11,15], 9)) == [0,1] and my_module.twoSum([2,3,4],6) == [1,2] and my_module.add([3,3],6) == [0,1]:
    print('Passed', end = '')
else:
    print('Test failed', end = '')

# print("This is the name of the program:", sys.argv[1])
   