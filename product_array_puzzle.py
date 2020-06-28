a_list=[10,3,5,6,2]
#output=[180,600,360,300,900]
res=[]

for i in range (len(a_list)):
    product=1
    if i==0:
        temp_list=a_list[i+1:]
        #print(temp_list)

        for j in temp_list:
            product=product*j
    else:
        print(i)
        left_list=a_list[:i]
        print(left_list,'left')
        right_list=a_list[i+1:]
        print(right_list,"right")
        for j in left_list:
            product=product*j
        for k in right_list:
            product=product*k
    print(product)
    res.append(product)
print(res)
            

