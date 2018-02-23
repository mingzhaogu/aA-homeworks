FISHIES = ['fish', 'fiiish', 'fiiiiish', 'fiiiish',
          'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

def sluggish_octopus(sluggies)
  sluggies.each_index do |i|
    sluggies.each_index do |j|
      next if i >= j
      if sluggies[i].length > sluggies[j].length
        sluggies[i], sluggies[j] = sluggies[j], sluggies[i]
      end
    end
  end

  sluggies.last
end

class Array
  def merge_sort(&prc)
    prc ||= Proc.new { |x, y| x <=> y }

    return self if length <= 1

    middle_idx = self.length / 2

    left = self.take(middle_idx).merge_sort(&prc)
    right = self.drop(middle_idx).merge_sort(&prc)

    Array.merge(left, right, &prc)
  end

  def self.merge(left, right, &prc)
    merged = []

    until left.empty? || right.empty?
      case prc.call(left.first, right.first)
      when -1
        merged << left.shift
      when 0
        merged << left.shift
      when 1
        merged << right.shift
      end
    end

    merged + left + right
  end
end

def dominant_octopus(dommies)
  prc = Proc.new { |x, y| x.length <=> y.length }
  dommies.merge_sort(&prc).last
end

def clever_octopus(clevs)
  loooooongest = FISHIES.first

  clevs.each do |fish|
    loooooongest = fish if fish.length > loooooongest.length
  end

  loooooongest
end

TILES_ARRAY = ["up", "right-up", "right", "right-down",
              "down", "left-down", "left",  "left-up" ]

def slow_dance_octopus(direction, tiles)
  tiles.each_with_index do |tile, idx|
    return idx if tile == direction
  end
end

TILES_HASH = {
    "up" => 0,
    "right-up" => 1,
    "right"=> 2,
    "right-down" => 3,
    "down" => 4,
    "left-down" => 5,
    "left" => 6,
    "left-up" => 7
}

def constant_dance_octopus(direction, tiles)
  tiles[direction]
end
