# make example commands

## 100 make Example Commands

```bash
# 1. Run the default target
make

# 2. Run a specific target
make build

# 3. Run multiple targets
make clean build test

# 4. Run with a specific Makefile
make -f Makefile.prod

# 5. Run make in a specific directory
make -C /path/to/project

# 6. Run make in a directory and run a specific target
make -C /path/to/project build

# 7. Dry run — print commands without executing them
make -n

# 8. Dry run for a specific target
make -n deploy

# 9. Always rebuild all targets (ignore timestamps)
make -B

# 10. Always rebuild a specific target
make -B build

# 11. Keep going after errors (build as much as possible)
make -k

# 12. Keep going even if some targets fail
make -k test

# 13. Run N jobs in parallel
make -j4

# 14. Run with unlimited parallel jobs
make -j

# 15. Don't start new jobs if load average exceeds N
make -j4 -l 2.0

# 16. Suppress echoing of commands
make -s

# 17. Silent build for a specific target
make -s build

# 18. Print make's internal database
make -p

# 19. Print database without executing
make -pn

# 20. Print database for a specific target
make -p build

# 21. Override a variable from the command line
make CC=clang

# 22. Override multiple variables
make CC=clang CFLAGS="-O2 -march=native"

# 23. Override the default goal
make all

# 24. Check if a target is up to date (exit 0 if up to date)
make -q build && echo "Up to date"

# 25. Touch targets without rebuilding
make -t build

# 26. Treat FILE as very old (trigger rebuild of dependents)
make -W src/main.c

# 27. Treat FILE as infinitely new (rebuild as if file changed)
make -W src/main.c --what-if=src/main.c

# 28. Include debug output
make -d

# 29. Print verbose debug output
make --debug=all

# 30. Print only basic debug info
make --debug=basic

# 31. Environment variables override makefile variables
make -e

# 32. Warn when undefined variables are referenced
make --warn-undefined-variables

# 33. Disable built-in implicit rules
make -r

# 34. Disable built-in variable settings
make -R

# 35. Print current directory when entering it
make -w

# 36. Disable printing of current directory
make --no-print-directory

# 37. Run install target (common convention)
make install

# 38. Run uninstall target
make uninstall

# 39. Run clean target (remove build artifacts)
make clean

# 40. Run distclean (clean everything including configure output)
make distclean

# 41. Run check / test target
make check

# 42. Run test target
make test

# 43. Run dist target (create distribution archive)
make dist

# 44. Verbose build (often via V=1 convention)
make V=1

# 45. Release build (common convention)
make release

# 46. Debug build
make debug

# 47. Prefix-override install
make prefix=/usr/local install

# 48. Install to home directory
make prefix="$HOME/.local" install

# 49. Specify include directory for makefiles
make -I /usr/share/make

# 50. Run from configure-generated Makefile
./configure && make && make install

# 51. Run autoreconf and configure before make
autoreconf -i && ./configure && make

# 52. Build from a Makefile in a subdirectory
make -C src/

# 53. Recurse into subdirectories
make -C lib && make -C src

# 54. Pass flags through to sub-make
make MAKEFLAGS="-j4" -C src

# 55. Export a variable to sub-make
export MY_VAR=value && make

# 56. Print help (if Makefile defines a help target)
make help

# 57. List all targets (using a help/list target or grep)
make -pn | grep -E "^[a-zA-Z_-]+:" | head -30

# 58. Run a target and time it
time make build

# 59. Makefile: define a target with dependencies
# build: compile link
#    @echo "Build complete"

# 60. Makefile: phony target declaration
# .PHONY: clean build test

# 61. Makefile: set default goal
# .DEFAULT_GOAL := build

# 62. Makefile: assign a simple variable
# CC := gcc

# 63. Makefile: assign a recursive variable
# SOURCES = $(wildcard src/*.c)

# 64. Makefile: append to a variable
# CFLAGS += -Wall

# 65. Makefile: automatic variable $@ (target name)
# build:
#     gcc -o $@ main.c

# 66. Makefile: automatic variable $< (first dependency)
# %.o: %.c
#     gcc -c $< -o $@

# 67. Makefile: automatic variable $^ (all dependencies)
# app: main.o utils.o
#     gcc -o $@ $^

# 68. Makefile: pattern rule for .c to .o
# %.o: %.c
#     $(CC) $(CFLAGS) -c $< -o $@

# 69. Makefile: wildcard to find all source files
# SRCS := $(wildcard src/*.c)

# 70. Makefile: generate object file list from source list
# OBJS := $(SRCS:.c=.o)

# 71. Makefile: use subst to transform list
# OBJS := $(subst src/,build/,$(SRCS:.c=.o))

# 72. Makefile: use patsubst for pattern substitution
# OBJS := $(patsubst src/%.c,build/%.o,$(SRCS))

# 73. Makefile: conditional based on variable
# ifeq ($(DEBUG),1)
# CFLAGS += -g
# endif

# 74. Makefile: include another Makefile
# include common.mk

# 75. Makefile: include if it exists
# -include .env.mk

# 76. Makefile: define a multi-line variable
# define HELP_TEXT
# Usage: make [target]
# endef

# 77. Makefile: shell function in a recipe
# build:
#     $(shell mkdir -p build)

# 78. Makefile: use $(shell ...) in variable assignment
# GIT_COMMIT := $(shell git rev-parse --short HEAD)

# 79. Makefile: order-only prerequisite (don't trigger rebuild)
# build | builddir
# builddir:
#     mkdir -p build

# 80. Makefile: print a variable for debugging
# $(info CC is: $(CC))

# 81. Makefile: use foreach function
# $(foreach dir,$(SUBDIRS),$(MAKE) -C $(dir);)

# 82. Makefile: use filter to select files
# C_SRCS := $(filter %.c,$(SOURCES))

# 83. Makefile: use filter-out to exclude files
# NON_TEST := $(filter-out %_test.c,$(SRCS))

# 84. Makefile: use addprefix
# INCLUDES := $(addprefix -I,$(INCLUDE_DIRS))

# 85. Makefile: use addsuffix
# OBJ_FILES := $(addsuffix .o,$(BASENAMES))

# 86. Makefile: use dir and notdir
# DIRS := $(dir $(SRCS))
# BASES := $(notdir $(SRCS))

# 87. Makefile: use basename and suffix
# NO_EXT := $(basename $(SRCS))
# EXTS := $(suffix $(SRCS))

# 88. Makefile: use $(call ...) with a user-defined function
# log = @echo "[$(1)] $(2)"
# build:
#     $(call log,INFO,Building...)

# 89. Build with address sanitizer
make CFLAGS="-fsanitize=address -g"

# 90. Build with code coverage flags
make CFLAGS="--coverage" LDFLAGS="--coverage"

# 91. Cross-compile for ARM
make CC=arm-linux-gnueabihf-gcc

# 92. Install with DESTDIR for packaging
make DESTDIR=/tmp/staging install

# 93. Run with load limit and parallel jobs
make -j8 -l 4

# 94. Print directory changes
make -w -C src

# 95. Simulate a rebuild of a specific file
make -W src/config.h

# 96. Prune unnecessary rebuilds by touching output
make -t

# 97. Makefile: use VPATH to find source files in other directories
# VPATH := src:lib

# 98. Run make and capture output to a file
make 2>&1 | tee build.log

# 99. Run make and fail CI if there are warnings
make 2>&1 | grep -i "warning" && exit 1 || true

# 100. Show make version
make --version
```
