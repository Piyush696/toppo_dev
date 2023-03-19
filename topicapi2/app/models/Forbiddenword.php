<?php
namespace App\Models;
class Forbiddenword extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $forbiddenword_id;

    /**
     *
     * @var string
     */
    public $forbiddenword;

    /**
     *
     * @var string
     */
    public $inString;

    /**
     *
     * @var string
     */
    public $hasException;

    /**
     *
     * @var string
     */
    public $exceptions;

    /**
     *
     * @var integer
     */
    public $severity;

    /**
     *
     * @var string
     */
    public $interpretation;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("forbiddenword");
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'forbiddenword';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Forbiddenword[]|Forbiddenword|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Forbiddenword|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
