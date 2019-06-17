import hashlib

flag = 0
counter = 1
print("-----------------------------------------------------------")
print("I Will Encode Your Password to an MD5 Hash, and Try to Crack It Using A Brute-Force Dictionary Attack")
print("-----------------------------------------------------------")
pass_input= input("Enter Your Simple Super-Secret Password: ")

pass_hash= (hashlib.md5(pass_input.encode())).hexdigest()

wordlist = "wordlist.txt"
testlist= "testlist.txt"
try:
    pass_file= open(wordlist, "r")
except:
    print("No File Found")
    quit()
for word in pass_file:

    encode_word= word.encode('utf-8')
    digest = hashlib.md5(encode_word.strip()).hexdigest()
    print("Trying Password #: "+str(counter))

    counter+=1

    if digest == pass_hash:
        print("=-----------------------------------------------------------=")
        print("Your Entered Password Is: "+word+" Have A Great Day!")
        print("=-----------------------------------------------------------=")
        print("Please Press The 'Up' Arrow Key and Hit Enter to Try Again!")
        flag = 1
        break

if flag==0:
    print("-----------------------------------------------------------")
    print("Your Entered Password is Not In The Dataset, But Now It Is!")
    print("--- Please Try Again and See What Happens!! ---")
    print("-----------------------------------------------------------")
    print("Please Press The 'Up' Arrow Key and Hit Enter to Try Again!")
    with open(wordlist,'a') as file:
        file.write("\n"+str(pass_input))
        file.close()
    