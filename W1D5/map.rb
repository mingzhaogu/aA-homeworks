class Map
  def initialize
    @map = []
  end

  def assign(key, value)
    remove(key)

    @map << [key, value]
  end

  def lookup(key)
    @map.each do |pair|
      return true if pair[0] == key
    end

    false
  end

  def remove(key)
    @map.select! { |pair| pair[0] != key }

    @map
  end

  def show
    @map
  end
end

m = Map.new
