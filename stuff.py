a='<button class="1">1</button>'
b = a.split('1')
c = [1,2,3,4,5,6,7,8,9,0,'+','-','X','/','clear']
d = ' button'
for i in range(15):
    print(b[0]+str(c[i])+d+b[1]+str(c[i])+b[2])
