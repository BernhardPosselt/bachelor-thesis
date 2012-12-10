all: pdf

pdf:
	pdflatex Vorlage_BA.tex
	bibtex Literatur.aux
	pdflatex Vorlage_BA.tex
	pdflatex Vorlage_BA.tex

clean:
	rm -rf Vorlage_BA.pdf
	rm *.log
