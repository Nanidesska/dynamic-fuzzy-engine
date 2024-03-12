import cgi
form = cgi.FieldStorage()
with open ('results.txt','w') as fileOutput:
    fileOutput.write(form.getValue('name'))
    fileOutput.write(form.getValue('join'))