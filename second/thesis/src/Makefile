all: pdf

pdf:
	pdflatex thesis.tex
	bibtex thesis.aux
	pdflatex thesis.tex
	pdflatex thesis.tex

bib:
	bibtex thesis.aux

clean:
	rm -rf thesis.pdf
	rm -rf *.log
	rm -rf *.aux
	rm -rf *.bbl
	rm -rf *.lot
	rm -rf *.out
	rm -rf *.toc
	rm -rf *.blg
