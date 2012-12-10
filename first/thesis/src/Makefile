all: pdf

pdf:
	pdflatex AccessibilityAndModernWeb.tex
	bibtex AccessibilityAndModernWeb.aux
	pdflatex AccessibilityAndModernWeb.tex
	pdflatex AccessibilityAndModernWeb.tex

clean:
	rm -rf AccessibilityAndModernWeb.pdf
	rm -rf *.log
	rm -rf *.aux
	rm -rf *.bbl
	rm -rf *.lot
	rm -rf *.out
	rm -rf *.toc
	rm -rf *.blg
