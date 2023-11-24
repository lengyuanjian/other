import xml.etree.ElementTree as ET

# 解析XML文件
tree = ET.parse('example.xml')
root = tree.getroot()

# 清除不需要的命名空间前缀
# for element in root.iter():
#     for key, value in element.attrib.items():
#         if key.startswith('ns0:'):
#             element.attrib[key.replace('ns0:', '')] = value
#             del element.attrib[key]

# 保存修改后的XML文件
tree.write('new_example.xml', encoding='utf-8', xml_declaration=True)
