

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

spec = importlib.util.spec_from_file_location("test", "test.py")
# print(spec)
module = importlib.util.module_from_spec(spec)
if (my_module.add(2, 2)) == 4 and my_module.add(2, 3) == 5:
    print('Passed', end = '')
else:
    print('Test failed', end = '')

# print("This is the name of the program:", sys.argv[1])
  