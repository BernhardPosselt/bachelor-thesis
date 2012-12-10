all: pdf

pdf:
	pdflatex AccessibilityAndModernWeb.tex
	bibtex AccessibilityAndModernWeb.aux
	pdflatex AccessibilityAndModernWeb.tex
	pdflatex AccessibilityAndModernWeb.tex

clean:
	rm -rf AccessibilityAndModernWeb.pdf
	rm *.log
