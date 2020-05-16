<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/UNIVERSITY">
    <html>
        <body>
            <table border = "1">
                    <tr>
                        <th>NAME</th>
                        <th>SET</th>
                        <th>SITY</th>
                        <th>EXAM</th>
                        </tr>
                <xsl:for-each select = "SPECIALIZATION">
                <tr>
                        <td> <xsl:value-of select="NAME"/> <br/>  </td>
                        <td> <xsl:value-of select="SET"/>  <br/>  </td>
                        <td> <xsl:value-of select="SITY"/> <br/>  </td>
                        <td> <xsl:value-of select="EXAM"/> <br/>  </td>
                </tr>
                </xsl:for-each>
            </table>
        </body>
    </html>       
</xsl:template>
</xsl:stylesheet>