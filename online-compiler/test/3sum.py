

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

 
if (my_module.threeSum([-1,0,1,2,-1,-4])) == [[-1,-1,2],[-1,0,1]] and my_module.threeSum([0,1,1]) == []:
    print('Passed', end = '')
else:
    print('Test failed', end = '')

# print("This is the name of the program:", sys.argv[1])
  