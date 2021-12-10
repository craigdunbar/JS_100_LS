/*
Example 3
Action     Performed on    Side effect    Return Value  return value used?
method call outer array   none            new array     no
map                                       [1, 3]        

callback  each sub arr      none          element at  yes used by map
execution                                 index 0 

element access  each sub arr  none        element at  yes used by
[0]                                       index 0     console.log 

method call   element at    outputs string  undefined no
console.log     index 0     of an integer

method call     element at    none          element at  yes used by map
return  element  index 0                     indwex 0
reference [0]


Example 4

Action     Performed on    Side effect    Return Value  return value used?

variable                      none          undefined     no
declaration 
and assignment

method call outer array   none            undefined       yes addigned to myArr
for each

outer call back   each sub arr  none          [undefined, undefined]    no
execution                

method call   each sub arr  none        [undefined,         yes explicit
map                                     undefined]          return by outer callback

inner callback  element of sub   none       undefined     yes used to 
execution       array in                                  transfrom the
                that iteration                            array

comparison     each element  none      boolean             yes evaluated by if

method call   each element          outputs string of         undefined    yes determines
console.log                         number                                  return value of
                                                                             inner callback     



*/