import { jsPDF } from "jspdf";

doc.setFontSize(40)
doc.text(35, 25, 'Paranyan loves jsPDF')
doc.addImage(imgData, 'JPEG', 15, 40, 180, 160)
