my_input=[2,0,2,1,1,0]
n=3
#output=0,0,1,1,2,2
a_dict=[]
for i in range (n) :
    a_dict.append(0)
print(a_dict)
for i in range(len(my_input)):
    color=my_input[i]
    print(color)
    a_dict[color]+=1
# a_dict[2]+=1
print(a_dict)
res=[]
for i in range(len(a_dict)):
    count=a_dict[i]
    number_to_print=i
    while count>0:
        res.append(number_to_print)
        count-=1
print(res)
 
# for i in a_dict:
#     print(i)