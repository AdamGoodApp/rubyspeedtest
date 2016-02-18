class Beta

  def self.isPrime(n)
    return false if n < 2
    return true if n == 2
    return false if n % 2 == 0

    upper_lim = (Math.sqrt n.to_f).to_i
    i = 3
    while i<= upper_lim
      return false if n % i == 0
      i+=2
    end

    true
  end

  def self.calc(n)
    beginning = Time.now
    lim=n
    no_primes = 0

    i = 0
    while i<= lim
      no_primes += 1 if isPrime(i)
      i+=1
    end

    ruby_time = Time.now - beginning

    {ruby_time: ruby_time, no_primes: no_primes}
  end

end