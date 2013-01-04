import string

scalar = 8
translatorx = -1520
translatory = -880

first = 1
minX = 0
minY = 0

newString = ''
oldString = '272.075,173.873L272.334,173.357L274.521,173.357L276.06600000000003,174.129L276.838,174.001L277.225,175.031L278.77000000000004,174.90200000000002L278.641,175.80300000000003L279.92900000000003,175.80300000000003L281.21500000000003,176.83300000000003L280.18500000000006,177.99200000000002L278.8980000000001,177.348L277.6110000000001,177.477L276.8380000000001,177.348L276.32400000000007,177.863L275.2940000000001,177.992L274.9070000000001,177.34799999999998L274.0070000000001,177.73399999999998L272.8480000000001,179.53699999999998L272.20500000000015,179.14999999999998L272.07500000000016,178.378L272.07500000000016,177.605L271.4320000000002,176.833L272.07500000000016,176.318L272.3340000000002,175.28900000000002L272.5930000000002,176.705'
coordinateList = string.split(oldString, 'L')

for coordinate in coordinateList:
	lat = float(string.split(coordinate, ',')[0]) * scalar + translatorx
	lng = float(string.split(coordinate, ',')[1]) * scalar + translatory

	if (first == 1):
		minX = lat
		minY = lng

	if (lat < minX):
		minX = lat
	if (lng < minY):
		minY = lng
	newString += str(lat) + ',' + str(lng) + 'L'

newString = 'M' + newString + 'Z'
print newString


if (272.075 * scalar + translatorx < minX):
	minX = 272.075 * scalar + translatorx

if (176.705 * scalar + translatory < minY):
	minY = 176.705 * scalar + translatory

print 'MinX: ' + str(minX) + ', MinY: ' + str(minY)
