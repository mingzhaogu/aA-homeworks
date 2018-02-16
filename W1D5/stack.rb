class Stack
    def initialize
      @stack = []
    end

    def add(el)
      @stack.push(el)
      @stack
    end

    def remove
      @stack.pop
      @stack
    end

    def show
      @stack
    end
  end
