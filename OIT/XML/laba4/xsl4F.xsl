<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version = "1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match = "/University">
        <html>
            <body>
                <table border = "1">
                    <tr>
                        <th>Фамилия</th>
                        <th>Имя</th>
                        <th>Отчество</th>
                        <th>Средний балл</th>
                        <th>Дата рождения</th>
                    </tr>
                <xsl:for-each select ="INFORMATION">
                    <xsl:sort select = "YearOfBirth" />
                    <tr>
                    <td bgcolor = "white"> <xsl:value-of select = "Surname" /><br/>  </td> 
                    <td bgcolor = "white"> <xsl:value-of select = "Name" /><br/>  </td>
                    <td bgcolor = "white"> <xsl:value-of select = "MiddleName" /><br/>  </td>
                    <xsl:choose>
                    <xsl:when test = "PassingScore = 6">
                        <td bgcolor = "green"><xsl:value-of select = "PassingScore"/></td>
                    </xsl:when>
                    <xsl:when test ="PassingScore = 10">
                    <td bgcolor = "blue"><xsl:value-of select = "PassingScore"/></td>
                    </xsl:when>
                    <xsl:when test = "PassingScore &lt; 6">
                        <td bgcolor = "red"><xsl:value-of select = "PassingScore"/></td>
                    </xsl:when>
                    <xsl:otherwise>
                    <td><xsl:value-of select = "PassingScore" /> </td>
                    </xsl:otherwise>
                    </xsl:choose>
                    <td bgcolor = "white"> <xsl:value-of select = "YearOfBirth" /><br/>    </td>
                    </tr>
            </xsl:for-each>
            </table>
            </body>
        </html>       
    </xsl:template>
</xsl:stylesheet>
